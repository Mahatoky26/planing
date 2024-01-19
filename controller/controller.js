import {planing,conger} from "../model/model.js";
import { Op } from "sequelize";
import  sequelize  from "sequelize";
const getplaning = (req, res) =>{
    const sem1 = req.params.sem1
    const sem2 = req.params.sem2
    planing.findAll({
        where: {
          date: {
            [sequelize.Op.between]: [sem1, sem2]
          }
        }
      }) .then(pl => {res.status(200).json(pl)})
      .catch(error=>{res.status(500).json(error)})
};
const getplaning2date = (req, res) =>{
    const date1 = req.params.date1
    const date2 = req.params.date2
    planing.findAll({
        where: {
          date: {
            [sequelize.Op.between]: [date1, date2]
          }
        }
      }) .then(pl => {res.status(200).json(pl)})
      .catch(error=>{res.status(500).json(error)})
}
const createplaning = (req, res) =>{
    const {body} = req;
  planing
          .create({ ...body })
          .then(() => {
            res.status(200).json({ msg: "success" });
          })
          .catch((error) => {
            res.status(500).json(error);
          });
}
const updateplaning = (req, res) =>{
    const {id} = req.params
  const {body} = req
  planing.findByPk(id)
  .then(pl=>{
    pl.Idmed = body.Idmed
    pl.save()
    .then(()=>{res.status(200).json({msg: "update succes"})})
    .catch(error=>{res.status(500).json(error)})})
}
const deleteplaning = (req,res) => {
    const {id} = req.params
    planing.destroy({where: {id: id}})
    .then(pl => {if(pl == 0){res.status(400).json({msg: "pas trouver"})};
    res.status(200).json({msg: "suppression succes"})
    })
    .catch(error=>{res.status(500).json(error)}) 
}
const deleteplaningIdmed = (req, res) => {
    const {id} = req.params
    planing.destroy({where: {Idmed: id}})
    .then(pl => {if(pl == 0){res.status(400).json({msg: "pas trouver"})};
    res.status(200).json({msg: "suppression succes"})
    })
    .catch(error=>{res.status(500).json(error)}) 
}


const createconger = (req, res) =>{
    const {body} = req;
  conger
          .create({ ...body })
          .then(() => {
            res.status(200).json({ msg: "success" });
          })
          .catch((error) => {
            res.status(500).json(error);
          });
}
export { createplaning,updateplaning,deleteplaning,getplaning2date,getplaning,createconger,deleteplaningIdmed}