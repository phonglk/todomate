import Auth, { Greeting } from '../components/Auth';

const IndexPage = () => (
  <>
    <Greeting />

    <Auth noAuthContent={<UnauthContent />}>
      <AuthorisedContent />
    </Auth>
  </>
);

const AuthorisedContent = () => {
  // const { data = [] } = useCollection('yourcollection');
  // const { user } = useContext(AuthContext);

  return <div className="mt-2">Some content here</div>;
};

const UnauthContent = () => {
  return (
    <div className="mt-2 font-light ">
      Show some content do not require authentication
    </div>
  );
};

export default IndexPage;
