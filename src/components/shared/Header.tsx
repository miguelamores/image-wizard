interface Props {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Header;
