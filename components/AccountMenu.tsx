import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import React from 'react';

interface AccountMenuProps {
    visible: boolean;
}
const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    const { data } = useCurrentUser();
    if (!visible) return null;
    return (
        <div className="bg-black absolute top-14 right-0 w-56 py-5 border-gray-800 border-2">
            <div className="flex flex-col gap-3">
                <div className="flex px-3 group/item gap-3 items-center w-full">
                    <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
                    <p className="text-white text-sm group-hover/item:underline">{data?.name}</p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div onClick={() => signOut()} className="text-white px-3 hover:underline text-sm text-center">
                    Sing out of Netflix
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;
