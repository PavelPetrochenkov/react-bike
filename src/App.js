import React, { useEffect } from 'react'
import Context from './context'
import CreateBike from './components/CreateBike/CreateBike'
import AvailableBikeList from './components/AvailableBikes/AvailableBikeList'
import MyBikeList from './components/MyBikes/MyBikeList'


function App() {

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
    const url = 'http://localhost:1328/bikes/';
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
    const url = 'http://localhost:1328/user/myRented';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(item => {
      setMyBikeList(item.alreadyRentedBike)
    }).catch(error => {
      console.error('Ошибка:', error);
    })
  }

  // async function getAllRentedBikes(){
  //   const url = 'http://localhost:1328/user/wasRented';
  //   fetch(url, {
  //     method: 'GET', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response=> response.json()).then(item=>{
  //     console.log(item.wasRentedBike)
  //   }).catch(error=>{
  //     console.error('Ошибка:', error);
  //   })
  // }

  async function createBike(name, type, price) {
    const url = 'http://localhost:1328/bikes/create';
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
    const url = 'http://localhost:1328/bikes';
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
    const url = 'http://localhost:1328/user/add';
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
    const url = 'http://localhost:1328/user/cancel';
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
