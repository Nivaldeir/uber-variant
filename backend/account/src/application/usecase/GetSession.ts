import TokenGenerator from "../../domain/token/TokenGenerator";

export default class GetSession {
  async execute(input: Input): Promise<Output> {
    const payload = TokenGenerator.verify("secret", input.token)
    return {
      email: payload.email
    }
  }
}

type Input = {
  token: string;
}

type Output = {
  email: string
}