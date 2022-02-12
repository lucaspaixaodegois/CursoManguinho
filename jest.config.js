module.exports = {
  roots: ['<rootDir>/src'],//define pasta raiz
  collectCoverageFrom: [ //coletar qualquer arquivo do tipo ts ou tsx
    '<rootDir>/src/**/*.{ts.tsx}',
  ],
  coverageDirectory: 'coverage', //vai criar uma pasta na raiz do projeto quando encontrar o arquivos js ou tsx
  testEnvironment: 'node', // node
  transform: { // tanscreve antes de rodar todos os tipos ts  antes de rodar
    '.+\\.ts$': 'ts-jest'
  }
}