/*
 * Basic Example
 *
 * This is a basic example for apiDoc.
 * Documentation blocks without @api (like this block) will be ignored.
 */

/**
 * @api {get} /user/:id 获取用户信息
 * @apiName GetUser 
 * @apiGroup User
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} wxId 用户微信ID.
 *
 * @apiSuccess {String} firstname 用户的姓.
 * @apiSuccess {String} lastname  用户的名.
 *
 * @apiSuccessExample 应答成功:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound 用户<code>id</code>未发现.
 *
 * @apiErrorExample 应答错误:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not Found"
 *     }
 */