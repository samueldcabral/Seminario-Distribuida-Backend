const db = require("../config/firabase");

const UserController = {
  storePlaces: async (req, res) => {
    const {userName, place} = req.body;

    try {
      let snapshot = await db.collection("users")
                              .where("name", "==", userName)
                              .get();

      //If that user is not in database, add it to firestore.
      if(!snapshot.docs.length){
        db.collection("users").add({
          name: userName,
          places: [place]
        });
      }else {
        snapshot.forEach((item) => {
          const newPlaces = item.data().places || [];
          newPlaces.push(place);
  
          item.ref.update({
            places: newPlaces
          });
        });
      }
     
      res.json({message: "Place added successfully!"});

    } catch (error) {
      console.log(error)
      response.status(500).send(`Error fetching data from database.\n${error}`);
    }
  },
  // getUsers: async (req,res) => {

  // }
}

module.exports = UserController;