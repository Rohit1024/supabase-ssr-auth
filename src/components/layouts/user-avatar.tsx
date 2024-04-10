import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

interface UserAvatarProps extends AvatarProps {
  userData: {
    full_name: string;
    username: string;
    avatar_url: string;
  } | null;
}

export function UserAvatar({ userData, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {userData?.avatar_url ? (
        <AvatarImage alt="Picture" src={userData?.avatar_url} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{userData?.full_name}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
