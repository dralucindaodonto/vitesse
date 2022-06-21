<template>
  <n-card title="Informações do paciente">
    <div>
      <n-space vertical>
        <n-table :bordered="false">
          <thead>
            <!-- <tr>
              <th>Nome</th>
              <th>Nome do paciente</th>
            </tr> -->
          </thead>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>Nome do paciente completo</td>
            </tr>
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
  </n-card>
</template>

<route lang="yaml">
meta:
  layout: patientlayout
</route>
