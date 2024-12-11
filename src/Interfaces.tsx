import React from "react";

export interface Posts {
 key?: number;
 id?: number;
 author: string;
 body: string;
}

export interface PostListProps {
 props: Posts[];
}

export interface StateFunctionProps {
 body?: string;
 author?: string;
 onBodyChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
 onAuthorChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 onCancel?: () => void;
 onAddPost?: (arg: Posts) => void;
}

export interface MyComponentProps {
 children?: React.ReactNode;
 isPosting?: boolean;
 onClose?: () => void;
 onCreatePost?: () => void;
 onStopPosting?: () => void;
}
