import { render, waitFor ,getByTestId, screen} from "@testing-library/react";
import UserDetails from "../UserDetails";
import { renderWithProviders } from 'setUpTestStore';
// import { displayUsers } from "../../redux/users/userActions";
// import { renderWithProviders } from "App.test";
//import * as api from '../redux/users/userActions'
import store, { persistor } from "../../redux/store";
import { userRequest } from "redux/users/userRequest";

jest.mock("../../redux/users/userRequest.js");

describe("Userdetails Component" , () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // userRequest.mockImplementation(()=> Promise.resolve({
    //   data : [{name :"Jenni2"}],
    // }))
    
  });

  it ("checking api success call " , async () => {
    const{getByText, container} = renderWithProviders(<UserDetails/>, {store})
    await waitFor(()=>{
      expect(getByText("1. Jenni2")).toBeInTheDocument();
    });
    expect(container.firstChild).toMatchSnapshot();
  })

  
  it("checking usedetails in screen" , () => {
  
    renderWithProviders(<UserDetails/>, {store})
    const txt = screen.getByTestId("quote")
    expect(txt).toBeInTheDocument()
    
  })


  it.only("checking err msg in screen" ,async() => {
    userRequest.mockImplementation(()=> Promise.reject({
      error : {message :"error - Network Error"},
    }));
    renderWithProviders(<UserDetails/>, {store});
    await waitFor(()=>{
      expect("error - Network Error").toBeInTheDocument();
    })
  })

  // it ("checking api failure call " , async () => {
  //   userRequest.mockRejectedValue({})
  //   const{getByText} = renderWithProviders(<UserDetails/>, {store})
  //   await waitFor(()=>{
  //     expect(getByText("error")).toBeInTheDocument()
  //   })
  // })
})



