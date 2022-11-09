import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * By passing in the appropriate options, you can create a new folder
    **/
    CreateFileAssociation(req: operations.CreateFileAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateFileAssociationResponse>;
    /**
     * By passing in the appropriate properties, you can create a new folder
    **/
    CreateFolder(req: operations.CreateFolderRequest, config?: AxiosRequestConfig): Promise<operations.CreateFolderResponse>;
    /**
     * Delete a specific file
    **/
    DeleteFile(req: operations.DeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * By passing in the appropriate options, you can create a new folder
    **/
    DeleteFileAssociation(req: operations.DeleteFileAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileAssociationResponse>;
    /**
     * By passing in the appropriate ID, you can delete a folder
    **/
    DeleteFolder(req: operations.DeleteFolderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFolderResponse>;
    /**
     * By passing in the appropriate options,
    **/
    GetAssociationsByObject(req: operations.GetAssociationsByObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsByObjectResponse>;
    GetFile(req: operations.GetFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * By passing in the appropriate options,
     *
    **/
    GetFileAssociations(req: operations.GetFileAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFileAssociationsResponse>;
    /**
     * By passing in the appropriate options, retrieve data for specific file
    **/
    GetFileContent(req: operations.GetFileContentRequest, config?: AxiosRequestConfig): Promise<operations.GetFileContentResponse>;
    GetFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * By passing in the appropriate ID, you can search for specific folder
    **/
    GetFolder(req: operations.GetFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * By passing in the appropriate options, you can search for available folders
    **/
    GetFolders(req: operations.GetFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetFoldersResponse>;
    /**
     * Search for the user inbox
    **/
    GetInbox(req: operations.GetInboxRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxResponse>;
    /**
     * Updates file properties of a single file
    **/
    UpdateFile(req: operations.UpdateFileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFileResponse>;
    /**
     * By passing in the appropriate ID and properties, you can update a folder
    **/
    UpdateFolder(req: operations.UpdateFolderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFolderResponse>;
    UploadFile(req: operations.UploadFileRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
export {};
