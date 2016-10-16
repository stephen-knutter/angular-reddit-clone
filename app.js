const app = angular.module('shrooms', ['angularMoment']);

app.controller('mainCtrl', ['$scope', '$filter', 'data', 'moment',
  ($scope, $filter, data, moment) => {
    $scope.data = data;
    $scope.showCommentForm = [];
    $scope.showCommentsList = [];

    //Voting
    $scope.upvote = (id) => {
      for (let i in $scope.data) {
        let current = $scope.data[i];
        if (current.id == id) {
          current.votes++;
          return;
        };
      }
    };

    $scope.downvote = (id) => {
      for (let i in $scope.data) {
        let current = $scope.data[i];
        if (current.id == id) {
          current.votes--;
          return;
        };
      }
    };

    //Filter
    $scope.sortBy = (propertyName) => {
      $scope.reverse = true;
      $scope.propertyName = propertyName;
    };

    //Search
    $scope.searchShrooms = '';

    //Add post
    $scope.addPost = () => {
      let title = $scope.post.title,
          author = $scope.post.author,
          picture = $scope.post.picture,
          description = $scope.post.description;

      if (!title || !author || !picture || !description) return false;

      $scope.post.comments = [];
      $scope.post.votes = 0;
      $scope.post.date = new Date();
      $scope.data.unshift($scope.post);
      $scope.post = {};
      $('body').click();
    }

    //Comment form toggle
    $scope.showForm = (id) => {
      $scope.showCommentsList = [];
      $scope.showCommentForm[id] = !$scope.showCommentForm[id];
    }

    //Comments toggle
    $scope.showComments = (id) => {
      $scope.showCommentForm = [];
      $scope.showCommentsList[id] = !$scope.showCommentsList[id];
    }

    //Add comment
    $scope.comment = {};
    $scope.addComment = (id) => {
      let author = $scope.comment.author,
          text = $scope.comment.text

      if (!author || !text) return false;

      for (let i in $scope.data) {
        let current = $scope.data[i];
        if (current.id == id) {
          current.comments.push($scope.comment);
          $scope.showComments(id);
          $scope.comment = {};
          return;
        }
      }
    };
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
        votes: 5,
        comments: [
          {
            author: 'Alex',
            text: 'I found this mushroom in the field last Saturday'
          }
        ]
      },
      {
        id: 2,
        title: 'Agaricus Amicosus',
        author: 'Beatrix Potter',
        picture: 'http://farm5.static.flickr.com/4150/5061928540_a601229031.jpg',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2015-12-17T03:24:00'),
        votes: 10,
        comments: []
      },
      {
        id: 3,
        title: 'Agaricus Arvensis',
        author: 'Su Song',
        picture: 'http://www.wildaboutbritain.co.uk/pictures/data/8/Agaricus_arvensis-1779.jpg',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2010-12-17T03:24:00'),
        votes: 8,
        comments: []
      },
      {
        id: 4,
        title: 'Agaricus Campestris',
        author: 'Greger Mendel',
        picture: 'http://www.naturephoto-cz.com/img/fungi-mushrooms.jpg',
        description: 'Cheesecake babybel cottage cheese. Cream cheese say cheese lancashire halloumi everyone loves fromage frais stilton say cheese. Cut the cheese cheesy grin lancashire hard cheese cheesy feet emmental macaroni cheese queso. Fondue cheese and biscuits who moved my cheese bavarian bergkase fromage rubber cheese camembert de normandie.',
        date: new Date('2005-12-17T03:24:00'),
        votes: 21,
        comments: []
      }
    ];

  return data;
}]);
