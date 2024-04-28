const express = require("express")


const app = express()
const port = 3000
app.get("/", (req, res)=>{
    res.send({
        movie_sessions: [
            {
                movie_title: "Avengers: Endgame",
                session_time: "2024-04-28T09:00:00",
                start_time: "2024-04-28T09:00:00+04:00",
                end_time: "2024-04-28T11:30:00+04:00",
                cinema_hall: "Hall 1",
                ticket_price: 12.99,
                available_seats: 120
            },
            {
                movie_title: "The Lion King",
                session_time: "2024-04-28T11:30:00",
                start_time: "2024-04-28T11:30:00+04:00",
                end_time: "2024-04-25814:00:00+04:00",
                cinema_hall: "Hall 2",
                ticket_price: 10.99,
                available_seats: 90
            },
            {
                movie_title: "Joker",
                session_time: "2024-04-28T14:00:00",
                start_time: "2024-04-28T14:00:00+04:00",
                end_time: "2024-04-28T16:30:00+04:00",
                cinema_hall: "Hall 3",
                ticket_price: 11.99,
                available_seats: 100
            },
            {
                movie_title: "Frozen II",
                session_time: "2024-04-28T16:30:00",
                start_time: "2024-04-28T16:30:00+04:00",
                end_time: "2024-04-28T19:00:00+04:00",
                cinema_hall: "Hall 2",
                ticket_price: 9.99,
                available_seats: 80
            }
        ]
    })
})

app.listen(port, ()=>{
    console.log(port)
})