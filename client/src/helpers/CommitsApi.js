import { commitScraper,commits } from "./CommitSc";
export const CommitScr = async () => {
    const Commitscra = await commitScraper()
    console.log(Commitscra)
}
export default CommitScr