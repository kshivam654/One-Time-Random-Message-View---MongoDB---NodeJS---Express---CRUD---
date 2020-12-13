const Message = require("../models/message");

exports.getMessage = async (req, res, next) => {
    Message.findOne()
        .then((product) => {
            console.log(product);
            if (product != null) {
                Message.deleteOne({ _id: product._id })
                    .then((result) => {
                        console.log("Message Been deleted");
                        res.status(200).json(product);
                    })
                    .catch((error) => {
                        console.log("Cant perfrom delete");
                    });
            }
            res.status(201).json()
        })
        .catch((error) => {
            console.error(error);
        });
};

exports.postMessage = (req, res, next) => {
    const text = req.body.text;
    const name = req.body.name;
    const secrete = req.body.secrete;
    const time = req.body.time;
    const message = new Message({
        text: text,
        name: name,
        secrete: secrete,
        time: time,
    });

    message
        .save()
        .then((result) => {
            console.log("Message Got ADDED to DB!!");
            res.status(200).json();
        })
        .catch((error) => {
            console.error("Error-> data insert");
        });
};
