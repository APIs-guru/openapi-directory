import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StubMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAdminMappings - Delete all stub mappings
    **/
    deleteAdminMappings(config?: AxiosRequestConfig): Promise<operations.DeleteAdminMappingsResponse>;
    /**
     * deleteAdminMappingsStubMappingId - Delete a stub mapping
    **/
    deleteAdminMappingsStubMappingId(req: operations.DeleteAdminMappingsStubMappingIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminMappingsStubMappingIdResponse>;
    /**
     * getAdminMappings - Get all stub mappings
    **/
    getAdminMappings(req: operations.GetAdminMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminMappingsResponse>;
    /**
     * getAdminMappingsStubMappingId - Get stub mapping by ID
    **/
    getAdminMappingsStubMappingId(req: operations.GetAdminMappingsStubMappingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminMappingsStubMappingIdResponse>;
    /**
     * postAdminMappings - Create a new stub mapping
    **/
    postAdminMappings(req: operations.PostAdminMappingsRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsResponse>;
    /**
     * postAdminMappingsFindByMetadata - Find stubs by matching on their metadata
    **/
    postAdminMappingsFindByMetadata(req: operations.PostAdminMappingsFindByMetadataRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsFindByMetadataResponse>;
    /**
     * postAdminMappingsRemoveByMetadata - Delete stub mappings matching metadata
    **/
    postAdminMappingsRemoveByMetadata(req: operations.PostAdminMappingsRemoveByMetadataRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsRemoveByMetadataResponse>;
    /**
     * postAdminMappingsReset - Reset stub mappings
     *
     * Restores stub mappings to the defaults defined back in the backing store
    **/
    postAdminMappingsReset(config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsResetResponse>;
    /**
     * postAdminMappingsSave - Persist stub mappings
     *
     * Save all persistent stub mappings to the backing store
    **/
    postAdminMappingsSave(config?: AxiosRequestConfig): Promise<operations.PostAdminMappingsSaveResponse>;
    /**
     * putAdminMappingsStubMappingId - Update a stub mapping
    **/
    putAdminMappingsStubMappingId(req: operations.PutAdminMappingsStubMappingIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAdminMappingsStubMappingIdResponse>;
}
