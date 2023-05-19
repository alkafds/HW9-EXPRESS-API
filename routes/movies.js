/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - title
 *         - genre
 *       properties:
 *         id:
 *           type: string
 *           description: the auto generated id of the movie
 *         title:
 *           type: string
 *           description: the title of the movie
 *         genre:
 *           type: string
 *           description: the genre of the movie
 *         createdAt:
 *           type: string
 *           format: date
 *           description: the date the movie was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: the date the movie was updated
 *       example:
 *         id: d5fE_asz
 *         title: inception
 *         genre: scifi
 *         createdAt: 2023-05-12T04:05:06.157Z
 *         updatedAt: 2023-05-14T13:50:01.143Z
 */