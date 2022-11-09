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
     * An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
    **/
    GetBenefitsDocumentUploadDownload(req: operations.GetBenefitsDocumentUploadDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetBenefitsDocumentUploadDownloadResponse>;
    GetBenefitsDocumentUploadStatus(req: operations.GetBenefitsDocumentUploadStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBenefitsDocumentUploadStatusResponse>;
    GetBenefitsDocumentUploadStatusReport(req: operations.GetBenefitsDocumentUploadStatusReportRequest, config?: AxiosRequestConfig): Promise<operations.GetBenefitsDocumentUploadStatusReportResponse>;
    PostBenefitsDocumentUpload(req: operations.PostBenefitsDocumentUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostBenefitsDocumentUploadResponse>;
    /**
     * Accepts document metadata, document binary, and attachment binaries.Full URL, including
     * query parameters, provided from POST `/document_uploads`.
     *
     * ## Example Payload
     *
     * The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
     * endpoint. Most programming languages should have provisions for assembling a multipart
     * payload like this without having to do so manually.
     *
     * ```
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="metadata"
     * Content-Type: application/json
     *
     * {"veteranFirstName": "Jane",
     * "veteranLastName": "Doe",
     * "fileNumber": "012345678",
     * "zipCode": "97202",
     * "source": "MyVSO",
     * "docType": "21-22"
     * "businessLine": "CMP"}
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="content"
     * Content-Type: application/pdf
     *
     * <Binary PDF contents>
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="attachment1"
     * Content-Type: application/pdf
     *
     * <Binary PDF attachment contents>
     * --17de1ed8f01442b2a2d7a93506314b76--
     * ```
     *
     * This PUT request would have an overall HTTP Content-Type header:
     *
     * ```
     * Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
     * ```
     *
     * Note that the Content-Disposition parameter "name" in each part must be the expected values
     * "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named
     * exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
     * are invalid.
     *
     * This is an example curl command:
     *
     * ```
     * curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
     * ```
     *
    **/
    PutBenefitsDocumentUpload(req: operations.PutBenefitsDocumentUploadRequest, config?: AxiosRequestConfig): Promise<operations.PutBenefitsDocumentUploadResponse>;
}
export {};
