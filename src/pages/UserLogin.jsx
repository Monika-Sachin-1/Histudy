import { LoginForm } from "../Components/Forms/LoginForm"
import { FormHeader } from "../Components/Headers/FormHeader"

export const UserLogin = () => {
  return (
    <div className="bg-white ">
        <section>
          <FormHeader/>
        </section>
        <section>
          <LoginForm/>
        </section>
    </div>
  )
}
