import AdminLayout from '@/layouts/AdminLayout'
import BaseLayout from '@/layouts/BaseLayout'
import Dashboard from '@/pages/Admin/Dashboard'
import ListBill from '@/pages/Admin/ListBill'
import BillDetail from '@/pages/Admin/ListBill/BillDetail'
import ListCategory from '@/pages/Admin/Category'
import ListProducts from '@/pages/Admin/Products'
import ListTypeVoucher from '@/pages/Admin/ListTypeVoucher'
import ListVoucher from '@/pages/Admin/ListVoucher'
import SigninPage from '@/pages/Client/AuthPage/SigninPage'
import SignupPage from '@/pages/Client/AuthPage/SignupPage'
// import SigninPage from '@/pages/Client/AuthPage/Signin'
// import SignupPage from '@/pages/Client/AuthPage/Signup'
import CartPage from '@/pages/Client/CartPage'
import ContactPage from '@/pages/Client/ContactPage'
import HomePage from '@/pages/Client/HomPage'
import IntroducePage from '@/pages/Client/IntroducePage'
import PaymentInformationPage from '@/pages/Client/PaymentInformationPage'
import PaymentSuccessPage from '@/pages/Client/PaymentSuccessPage'
import ProductDetailPage from '@/pages/Client/ProductDetailPage'
import ShopPage from '@/pages/Client/ShopPage'

import { Route, Routes } from 'react-router-dom'
import AddCategory from '@/pages/Admin/Category/AddCategory'
import EditCategory from '@/pages/Admin/Category/EditCategory'
import AddProduct from '@/pages/Admin/Products/AddProduct'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ShopPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='payment_information' element={<PaymentInformationPage />} />
                <Route path='payment_success' element={<PaymentSuccessPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='introduce' element={<IntroducePage />} />

                {/* auth */}
                {/* <Route path='signin' element={<SigninPage />} />
                <Route path='signup' element={<SignupPage />} /> */}
            </Route>
            <Route path='signin' element={<SigninPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route path='admin' element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='/admin/dashboard' element={<Dashboard />} />
                <Route path='/admin/products' element={<ListProducts />} />
                {/* <Route path='/admin/products/:id/edit' element={<EditProduct />}/> */}
                <Route path='/admin/products/add' element={<AddProduct />} />
                <Route path='/admin/categories' element={<ListCategory />} />
                {/* <Route path='/admin/categories/:id/edit' element={<EditCategory />}/> */}
                <Route path='/admin/categories/edit/:id' element={<EditCategory />} />
                <Route path='/admin/categories/add' element={<AddCategory />} />
                <Route path='/admin/voucher' element={<ListVoucher />} />
                {/* <Route path='/admin/voucher/:id/edit' element={<EditListVoucher />}/> */}
                {/* <Route path='/admin/voucher/add' element={<AddListVoucher />}/> */}
                <Route path='/admin/type_voucher' element={<ListTypeVoucher />} />
                {/* <Route path='/admin/type_voucher/:id/edit' element={<EditListTypeVoucher />}/> */}
                {/* <Route path='/admin/type_voucher/add' element={<AddListTypeVoucher />}/> */}
                <Route path='/admin/bill' element={<ListBill />} />
                {/* <Route path='/admin/bill/:id/edit' element={<EditListBill />}/> */}
                <Route path='/admin/bill/:id' element={<BillDetail />} />
            </Route>
        </Routes>
    )
}

export default Routers
