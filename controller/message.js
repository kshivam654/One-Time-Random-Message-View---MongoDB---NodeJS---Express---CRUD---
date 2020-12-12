const Message = require("../models/message");

exports.getMessage = async (req, res, next) => {
    Message.findOne()
        .then((product) => {
            console.log(product);
            Message.deleteOne({ _id: product._id })
                .then((result) => {
                    console.log("Message Been deleted");
                })
                .catch((error) => {
                    console.log("Cant perfrom delete");
                });
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
        })
        .catch((error) => {
            console.error("Error-> data insert");
        });
};
