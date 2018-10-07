const Donation = require('../models/Donation');
const Center = require('../models/Center');

exports.getDonations = (req, res) => {
  Donation.find()
    .exec()
    .then(donations => res.json(donations))
    .catch(err => console.log('getDonationsErr', err));
};

exports.postDonation = (req, res) => {
  const donation = new Donation(req.body);

  donation.save()
    .then(() => res.json(donation))
    .catch(err => console.log('postDonationErr', err));
};

exports.getCollected = (req, res) => {
  Donation.aggregate([{
    $match: {
      date: {
        $gte: '2016-12-09',
        $lte: '2020-12-15'
      }
    }
  }, {
    $group: {
      _id: null,
      collected: { $sum: '$amount' }
    }
  }
  ])
    .then(collected => res.json(collected))
    .catch(err => console.log('getCollectedErr', err));
};

exports.getCenters = (req, res) => {
  Center.find({})
    .exec()
    .then(centers => res.json(centers))
    .catch(err => console.log('getCentersErr', err));
};
