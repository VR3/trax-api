const Donation = require('../models/Donation');

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
        $gte: 20161209,
        $lte: 20161215
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