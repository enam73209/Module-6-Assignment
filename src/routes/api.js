const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portFolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

//Handling Blogs routes
router.get('/createBlog',blogController.create);
router.get('/readBlog',blogController.read);
router.get('/deleteBlog',blogController.delete);
router.get('/updateBlog',blogController.update);

//Handling BlogDetails routes
router.get('/createBlogDetails',blogDetailsController.create);
router.get('/readBlogDetails',blogDetailsController.read);
router.get('/deleteBlogDetails',blogDetailsController.delete);
router.get('/updateBlogDetails',blogDetailsController.update);


//Handling Comment routes
router.get('/createComment',commentController.create);
router.get('/readComment',commentController.read);
router.get('/deleteComment',commentController.delete);
router.get('/updateComment',commentController.update);

//Handling Message routes
router.get('/createMessage',messageController.create);
router.get('/readMessage',messageController.read);
router.get('/deleteMessage',messageController.delete);
router.get('/updateMessage',messageController.update);

//Handling Portfolio routes
router.get('/createPortfolio',portFolioController.create);
router.get('/readPortfolio',portFolioController.read);
router.get('/deletePortfolio',portFolioController.delete);
router.get('/updatePortfolio',portFolioController.update);

//Handling Products routes
router.get('/createProduct',productController.create);
router.get('/readProduct',productController.read);
router.get('/deleteProduct',productController.delete);
router.get('/updateProduct',productController.update);

//Handling Profit routes
router.get('/createProfit',profitController.create);
router.get('/readProfit',profitController.read);
router.get('/deleteProfit',profitController.delete);
router.get('/updateProfit',profitController.update);

//Handling Project routes
router.get('/createProject',projectController.create);
router.get('/readProject',projectController.read);
router.get('/deleteProject',projectController.delete);
router.get('/updateProject',projectController.update);

//Handling Service routes
router.get('/createService',serviceController.create);
router.get('/readService',serviceController.read);
router.get('/deleteService',serviceController.delete);
router.get('/updateService',serviceController.update);

//Handling Title routes
router.get('/createTitle',titleController.create);
router.get('/readTitle',titleController.read);
router.get('/deleteTitle',titleController.delete);
router.get('/updateTitle',titleController.update);
module.exports=router;