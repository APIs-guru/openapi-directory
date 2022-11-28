import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createFileAssociation - Creates a new file association
     *
     * By passing in the appropriate options, you can create a new folder
    **/
    createFileAssociation(req: operations.CreateFileAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateFileAssociationResponse>;
    /**
     * createFolder - Creates a new folder
     *
     * By passing in the appropriate properties, you can create a new folder
    **/
    createFolder(req: operations.CreateFolderRequest, config?: AxiosRequestConfig): Promise<operations.CreateFolderResponse>;
    /**
     * deleteFile - Deletes a specific file
     *
     * Delete a specific file
    **/
    deleteFile(req: operations.DeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileResponse>;
    /**
     * deleteFileAssociation - Deletes an existing file association
     *
     * By passing in the appropriate options, you can create a new folder
    **/
    deleteFileAssociation(req: operations.DeleteFileAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFileAssociationResponse>;
    /**
     * deleteFolder - Deletes a folder
     *
     * By passing in the appropriate ID, you can delete a folder
    **/
    deleteFolder(req: operations.DeleteFolderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFolderResponse>;
    /**
     * getAssociationsByObject - Retrieves an association object using a unique object ID
     *
     * By passing in the appropriate options,
    **/
    getAssociationsByObject(req: operations.GetAssociationsByObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsByObjectResponse>;
    /**
     * getFile - Retrieves a file by a unique file ID
    **/
    getFile(req: operations.GetFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * getFileAssociations - Retrieves a specific file associations
     *
     * By passing in the appropriate options,
     *
    **/
    getFileAssociations(req: operations.GetFileAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFileAssociationsResponse>;
    /**
     * getFileContent - Retrieves the content of a specific file
     *
     * By passing in the appropriate options, retrieve data for specific file
    **/
    getFileContent(req: operations.GetFileContentRequest, config?: AxiosRequestConfig): Promise<operations.GetFileContentResponse>;
    /**
     * getFiles - Retrieves files
    **/
    getFiles(req: operations.GetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetFilesResponse>;
    /**
     * getFolder - Retrieves specific folder by using a unique folder ID
     *
     * By passing in the appropriate ID, you can search for specific folder
    **/
    getFolder(req: operations.GetFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * getFolders - Retrieves folders
     *
     * By passing in the appropriate options, you can search for available folders
    **/
    getFolders(req: operations.GetFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetFoldersResponse>;
    /**
     * getInbox - Retrieves inbox folder
     *
     * Search for the user inbox
    **/
    getInbox(req: operations.GetInboxRequest, config?: AxiosRequestConfig): Promise<operations.GetInboxResponse>;
    /**
     * updateFile - Update a file
     *
     * Updates file properties of a single file
    **/
    updateFile(req: operations.UpdateFileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFileResponse>;
    /**
     * updateFolder - Updates an existing folder
     *
     * By passing in the appropriate ID and properties, you can update a folder
    **/
    updateFolder(req: operations.UpdateFolderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFolderResponse>;
    /**
     * uploadFile - Uploads a File
    **/
    uploadFile(req: operations.UploadFileRequest, config?: AxiosRequestConfig): Promise<operations.UploadFileResponse>;
}
