// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

// import AppBar from 'components/AppBar/AppBar';

const HomePage = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>home</>;
};

export default HomePage;

// return (
//   <>
//     <AppBar />

//     <Suspense fallback={<Loader />}>
//       {!isRefreshing && (
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contacts/*" element={<ContactsPage />} />
//           <Route path="/contacts/add" element={<AddContactPage />} />
//           <Route
//             path="/contacts/edit/:contactId"
//             element={<ChangeContactPage />}
//           />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       )}
//     </Suspense>

//     <Footer />
//   </>
// );
