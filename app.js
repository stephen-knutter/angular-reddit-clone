const app = angular.module('shrooms', ['angularMoment']);

app.controller('mainCtrl', ['$scope', '$filter', 'data', 'moment',
  ($scope, $filter, data, moment) => {
    $scope.data = data;

    //Voting
    $scope.upvote = function(id) {
      for (let i in $scope.data) {
        let current = $scope.data[i];
        if (current.id == id) {
          current.votes++;
        };
      }
    };

    $scope.downvote = function(id) {
      for (let i in $scope.data) {
        let current = $scope.data[i];
        if (current.id == id) {
          current.votes--;
        };
      }
    };

    //Filter
    $scope.sortBy = function(propertyName) {
      $scope.reverse = true;
      $scope.propertyName = propertyName;
    };

    //Search
    $scope.searchShrooms = '';
  }]);

app.factory('data', [() => {
  let data =
    [
      {
        id: 1,
        title: 'Agaricus Albolutescens',
        author: 'Carl Linnaeus',
        picture: 'http://www.fungi-zette.com/yuba_06/Hughs/2006-06-18-001-l.JPG',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2004-12-17T03:24:00'),
        votes: 0,
        comments: []
      },
      {
        id: 2,
        title: 'Agaricus Amicosus',
        author: 'Beatrix Potter',
        picture: 'https://summitvoice.files.wordpress.com/2010/08/agaricus3.jpg?w=1108',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2015-12-17T03:24:00'),
        votes: 0,
        comments: []
      },
      {
        id: 3,
        title: 'Agaricus Arvensis',
        author: 'Su Song',
        picture: 'http://www.wildaboutbritain.co.uk/pictures/data/8/Agaricus_arvensis-1779.jpg',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2010-12-17T03:24:00'),
        votes: 0,
        comments: []
      },
      {
        id: 4,
        title: 'Agaricus Campestris',
        author: 'Greger Mendel',
        picture: 'http://www.wildaboutbritain.co.uk/pictures/data/8/Agaricus_arvensis-1779.jpg',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2005-12-17T03:24:00'),
        votes: 0,
        comments: []
      }
    ];

  return data;
}]);
