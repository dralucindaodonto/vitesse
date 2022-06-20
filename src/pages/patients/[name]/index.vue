<template>
  <main>
    <div>
      <n-space vertical>
        <n-table striped :bordered="false">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nome do paciente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPF</td>
              <td>111.111.111.11</td>
            </tr>
            <tr>
              <td>Data de nascimento</td>
              <td>03/09/1985</td>
            </tr>
            <tr>
              <td>Celular</td>
              <td>(12)91118-8888</td>
            </tr>
            <tr>
              <td>Convênio</td>
              <td>Particular</td>
            </tr>
            <tr>
              <td>Gênero</td>
              <td>Masculino</td>
            </tr>
          </tbody>
        </n-table>
      </n-space>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
