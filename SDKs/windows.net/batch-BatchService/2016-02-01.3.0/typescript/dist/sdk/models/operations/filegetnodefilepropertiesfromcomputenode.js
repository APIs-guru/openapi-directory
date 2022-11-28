var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var FileGetNodeFilePropertiesFromComputeNodePathParams = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromComputeNodePathParams, _super);
    function FileGetNodeFilePropertiesFromComputeNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodePathParams.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodePathParams.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodePathParams.prototype, "poolId", void 0);
    return FileGetNodeFilePropertiesFromComputeNodePathParams;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromComputeNodePathParams };
var FileGetNodeFilePropertiesFromComputeNodeQueryParams = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromComputeNodeQueryParams, _super);
    function FileGetNodeFilePropertiesFromComputeNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodeQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", Number)
    ], FileGetNodeFilePropertiesFromComputeNodeQueryParams.prototype, "timeout", void 0);
    return FileGetNodeFilePropertiesFromComputeNodeQueryParams;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromComputeNodeQueryParams };
var FileGetNodeFilePropertiesFromComputeNodeHeaders = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromComputeNodeHeaders, _super);
    function FileGetNodeFilePropertiesFromComputeNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodeHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Unmodified-Since" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodeHeaders.prototype, "ifUnmodifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=client-request-id" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodeHeaders.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ocp-date" }),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodeHeaders.prototype, "ocpDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=return-client-request-id" }),
        __metadata("design:type", Boolean)
    ], FileGetNodeFilePropertiesFromComputeNodeHeaders.prototype, "returnClientRequestId", void 0);
    return FileGetNodeFilePropertiesFromComputeNodeHeaders;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromComputeNodeHeaders };
var FileGetNodeFilePropertiesFromComputeNodeRequest = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromComputeNodeRequest, _super);
    function FileGetNodeFilePropertiesFromComputeNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileGetNodeFilePropertiesFromComputeNodePathParams)
    ], FileGetNodeFilePropertiesFromComputeNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileGetNodeFilePropertiesFromComputeNodeQueryParams)
    ], FileGetNodeFilePropertiesFromComputeNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileGetNodeFilePropertiesFromComputeNodeHeaders)
    ], FileGetNodeFilePropertiesFromComputeNodeRequest.prototype, "headers", void 0);
    return FileGetNodeFilePropertiesFromComputeNodeRequest;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromComputeNodeRequest };
var FileGetNodeFilePropertiesFromComputeNodeResponse = /** @class */ (function (_super) {
    __extends(FileGetNodeFilePropertiesFromComputeNodeResponse, _super);
    function FileGetNodeFilePropertiesFromComputeNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], FileGetNodeFilePropertiesFromComputeNodeResponse.prototype, "batchError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileGetNodeFilePropertiesFromComputeNodeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FileGetNodeFilePropertiesFromComputeNodeResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileGetNodeFilePropertiesFromComputeNodeResponse.prototype, "statusCode", void 0);
    return FileGetNodeFilePropertiesFromComputeNodeResponse;
}(SpeakeasyBase));
export { FileGetNodeFilePropertiesFromComputeNodeResponse };
