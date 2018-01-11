/**
 * @api {post} /survey 发送用户填写的问卷信息
 * @apiVersion 0.1.0
 * @apiName PostSurvey
 * @apiGroup API
 *
 * @apiParam {Object} answer 回答的问题
 * @apiParam {String} answer.merNums 1-有多少商户受理visa
 * @apiParam {String} answer.atmNums 2-有多少ATM...
 * @apiParam {String} answer.currencyNums 3-货币种类数量
 * @apiParam {String} answer.cardNums 4-活跃卡数量
 * @apiParam {String} answer.headquarters 5-visa总部
 * @apiParam {String} answer.bankNums 6-银行数量
 * @apiParam {String} company 就职的单位
 * @apiParam {String} level 职务
 * @apiParam {String} name 姓名
 * @apiParam {String} phone 联系方式
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     仅返回status code
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     仅返回 status code
 */