export class Equipe{
  private _id: number;
  private _equipeum: string;
  private _equipedois: string;
  private _pontosum: number;
  private _pontosdois: number;


  constructor(equipeum: string, equipedois: string, pontosum: number, pontosdois: number){
    this._equipeum = equipeum;
    this._equipedois = equipedois;
    this._pontosum = pontosum;
    this._pontosdois = pontosdois;
  }
  public getequipeum(): string{
    return this._equipeum;
  }
  public setequipeum(equipeum: string):void{
    this._equipeum = equipeum;
  }
  public getequipedois(): string{
    return this._equipedois;
  }
  public setequipedois(equipedois: string):void{
    this._equipedois = equipedois;
  }
  public getPontosum():number{
    return this._pontosum;
  }
  public setPontosum(pontosum: number):void{
    this._pontosum = pontosum;
  }
   public getPontosdois():number{
    return this._pontosdois;
  }
  public setPontosdois(pontosdois: number):void{
    this._pontosdois = pontosdois;
  }

}
