import React, { useEffect } from 'react'
import Context from './context'
import CreateBike from './components/CreateBike/CreateBike'
import AvailableBikeList from './components/AvailableBikes/AvailableBikeList'
import MyBikeList from './components/MyBikes/MyBikeList'


function App() {

  //const urlServer = "https://techstack-bike-app.herokuapp.com/";
  const urlServer = "http://localhost:1328/";

  const [bikeList, setBikeList] = React.useState([])

  const [myBikeList, setMyBikeList] = React.useState([])

  useEffect(() => {
    loadDefault()
  }
    , [])

  async function loadDefault() {
    getAllBike()
    getAllMyBikes()
  }

  async function getAllBike() {
    const url = urlServer+'bikes/';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(item => {
      setBikeList(item.bikes)
    }).catch(error => {
      console.error('Ошибка:', error);
    })
  }

  async function getAllMyBikes() {
    const url = urlServer+'user/myRented';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(item => {
      setMyBikeList(item.myBikes)
    }).catch(error => {
      console.error('Ошибка:', error);
    })
  }

  async function createBike(name, type, price) {
    const url = urlServer+'bikes/create';
    const data = {
      name: name,
      type: type,
      price: price,
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()).then(item => {
        getAllBike()
      })
      .catch(error => {
        console.error('Ошибка:', error);
      })
  }

  async function deleteBike(id) {
    const url = urlServer+'bikes';
    const data = {
      bikeId: id,
    };
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(item => {
      getAllBike()
    }).catch(error => {
      console.error('Ошибка:', error);
    })
  }

  async function rentBike(id) {
    const url = urlServer+'user/add';
    const data = {
      bikeId: id,
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(item => {
      getAllMyBikes()
      getAllBike()
    }).catch(error => {
      console.error('Ошибка:', error);
    })
  }

  async function cancelBike(id) {
    const url = urlServer+'user/cancel';
    const data = {
      bikeId: id,
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(item => {
      getAllMyBikes()
      getAllBike()
    }).catch(error => {
      console.error('Ошибка:', error);
    })
  }

  return (
    <Context.Provider value={{ deleteBike, rentBike, cancelBike }}>
      <div className="wrapper">
        <h1>Awesome Rental Bike</h1>
        <div><CreateBike onCreate={createBike} /></div>
        <MyBikeList myBikeList={myBikeList} bikeList={bikeList} />
        <div><AvailableBikeList bikeList={bikeList} /></div>
      </div>
    </Context.Provider>
  );
}

export default App;
