const express = require('express');
const res = require('express/lib/response');
const db = require('../config/config.db')



   exports.getAll = (req, res) => {
        let qr = 'select * from user'

        db.query(qr,(err, result) => {
            if(err)
            {
                console.log(err, 'err');
            }

            if(result.length>0)
            {
                res.send({
                    message: 'all user data',
                    data:result
                })
            }
        })
    };

    exports.onGet = (req, res) => {

        let getId = req.params.id;
     
      

        const qr = `select * from user where id = ${getId}`;

        db.query(qr, (err, result) => {
            if(err) {console.log(err, 'err');}
            if(result.length>0)
            {
                res.send({
                    message: 'get single data',
                    data:result
                });
            }
            else{
                res.send({
                    message:'data not found'
                })
            }
        })
    };

    //criar usuario

    exports.createUser = (req,res) => {
        
        console.log(req.body, 'create data')
        let fullName = req.body.fullname;
        let Email = req.body.email;
        let Mobile = req.body.mobile;

        let qr = `insert into user(fullname, email, mobile)
                    values('${fullName}','${Email}', '${Mobile}')`

        db.query(qr, (err, result) => {
            if(err){console.log(err)}
            console.log(result, 'result')
            res.send({
                message: 'data inserted'
            })
        })}

        //alterar um usuario

        exports.updateUser = (req, res) => {
            
            let getId = req.params.id

            let fullName = req.body.fullname;
            let Email = req.body.email;
            let Mobile = req.body.mobile;

            let qr = `update user set fullname = '${fullName}', email = '${Email}', mobile = '${Mobile}'
             where id = '${getId}'`;

            db.query(qr, (err, result) => {
                if(err){console.log(err)}
                res.send({
                    message: 'data update'
                })
            })
        }


        //delete usuario

        exports.deleteUser = (req, res) => {
           
            let getId = req.params.id;

            let qr = `delete from user where id = ${getId} `;

            db.query(qr, (err, result) => {
                if(err){console.log(err)}

                res.send({
                    message: 'Usuario excluido'
                })
            })
        }