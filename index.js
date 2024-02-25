const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("empresa.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Conectado ao banco de dados Empresa com sucesso!");

  //db.run("CREATE TABLE setor (id_setor int, nome varchar(40), ramal varchar(4), e_mail varchar(30) )",);
  //db.run("CREATE TABLE funcionario (matricula int primary key, id_setor int not null,  nome varchar(40), nascimento date, telefone varchar(15) )",
  // );
});



/*db.run("INSERT INTO setor(id_setor, nome, ramal, e_mail) values (1, 'Financeiro', '4254', 'ztejd@example.com')",);
db.run("INSERT INTO setor(id_setor, nome, ramal, e_mail) values (2, 'Portaria', '4253', 'tzirw@example.com')",);
db.run("INSERT INTO setor(id_setor, nome, ramal, e_mail) values (3, 'Secretaria', '4237', 'tzirw@example.com')",);

db.run(
  "INSERT INTO funcionario(matricula, id_setor, nome, nascimento, telefone) values (1234, 1, 'Ana', '12-04-1978', '01219219')",
);
db.run(
  "INSERT INTO funcionario(matricula, id_setor, nome, nascimento, telefone) values (1235, 3, 'Ivo', '12-12-2000', '07280921')",
);
db.run(
  "INSERT INTO funcionario(matricula, id_setor, nome, nascimento, telefone) values (1236, 2, 'Oto', '07-02-1987', '06924324')",
);
*/

db.each("select matricula, nome from funcionario",(err, row)=>{
  if(err){
    console.error(err.message);
  }
  console.log(row.matricula + "\t" + row.nome);
})