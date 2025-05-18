import { useState } from 'react';
import gitHub from '../../assets/gitHub.png';
import Button from '../../components/Button';
import Header from '../../components/Header/index';
import Input from '../../components/Input';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const baseUrl = 'https://api.github.com/users';
    const userData = await fetch(`${baseUrl}/${user}`);
    const newUser = await userData.json();
    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;

      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`${baseUrl}/${user}/repos`);
      console.log(reposData);
      const newRepos = await reposData.json();

      if (newRepos) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img className="gitHub" src={gitHub} alt="Mascote GitHub" />
        <div className="info">
          <div className="search">
            <Input user={user} setUser={setUser} />
            <Button handleGetData={handleGetData} />
          </div>
          {currentUser?.name ? (
            <>
              <div className="profile">
                <img
                  className="photo-profile"
                  src={currentUser.avatar_url}
                  alt={currentUser.name}
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <>
              <div>
                <h4 className="repositorio">Repositórios</h4>
                {repos.map((repo) => (
                  <ItemList
                    title={repo.name}
                    key={repo.id}
                    description={repo.description}
                    url={repo.html_url}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
