import React from 'react'
import Head from 'next/head'

import {
  Container,
  Title,
  SubTitle,
  SubContainer,
  TitleCategory,
  DivInputsDoc,
  DivInputsContact,
  DivInputsTitle
} from '../styles/pages/Home'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Input from '../components/Input'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Varizon</title>
      </Head>

      <Header />
      <SubHeader />
      <SubContainer>
        <DivInputsTitle>
          <Title>Dados pessoais</Title>

          <SubTitle>Preencha os seus dados pessoais.</SubTitle>

          <TitleCategory>Nome</TitleCategory>
        </DivInputsTitle>

        <Input
          title="Preencha o seu nome completo"
          placeholder="Ex: José Peseiro"
          dimension={true}
        />
        <DivInputsTitle>
          <TitleCategory>Documento de identificação</TitleCategory>
        </DivInputsTitle>

        <DivInputsDoc>
          <Input
            title="Escolha o seu documento de identificação:"
            type="select"
            placeholder="Cartão de cidadão"
          />
          <Input
            title="Introduza o seu número de identificação:"
            placeholder="Ex: 1234567"
          />
        </DivInputsDoc>
        <Input
          title="Introduza o seu NIF:"
          placeholder="Ex: 1234567"
          type="nif"
        />
        <DivInputsTitle>
          <Title>Contactos</Title>
          <SubTitle>Indique os seus contactos</SubTitle>
        </DivInputsTitle>

        <DivInputsContact>
          <Input title="Telemóvel:" placeholder="Ex: 1234567" />
          <Input title="Telefone:" placeholder="Ex: 1234567" />
          <Input title="E-mail:" placeholder="Ex: 1234567" />
        </DivInputsContact>
      </SubContainer>
      <Footer />
    </Container>
  )
}

export default Home
