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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var UpdateDatasetAsyncPathParams = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsyncPathParams, _super);
    function UpdateDatasetAsyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsyncPathParams.prototype, "datasetId", void 0);
    return UpdateDatasetAsyncPathParams;
}(SpeakeasyBase));
export { UpdateDatasetAsyncPathParams };
var UpdateDatasetAsyncRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsyncRequestBody, _super);
    function UpdateDatasetAsyncRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsyncRequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=type" }),
        __metadata("design:type", String)
    ], UpdateDatasetAsyncRequestBody.prototype, "type", void 0);
    return UpdateDatasetAsyncRequestBody;
}(SpeakeasyBase));
export { UpdateDatasetAsyncRequestBody };
var UpdateDatasetAsyncSecurity = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsyncSecurity, _super);
    function UpdateDatasetAsyncSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], UpdateDatasetAsyncSecurity.prototype, "bearerToken", void 0);
    return UpdateDatasetAsyncSecurity;
}(SpeakeasyBase));
export { UpdateDatasetAsyncSecurity };
var UpdateDatasetAsyncRequest = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsyncRequest, _super);
    function UpdateDatasetAsyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatasetAsyncPathParams)
    ], UpdateDatasetAsyncRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateDatasetAsyncRequestBody)
    ], UpdateDatasetAsyncRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDatasetAsyncSecurity)
    ], UpdateDatasetAsyncRequest.prototype, "security", void 0);
    return UpdateDatasetAsyncRequest;
}(SpeakeasyBase));
export { UpdateDatasetAsyncRequest };
var UpdateDatasetAsyncResponse = /** @class */ (function (_super) {
    __extends(UpdateDatasetAsyncResponse, _super);
    function UpdateDatasetAsyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDatasetAsyncResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], UpdateDatasetAsyncResponse.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDatasetAsyncResponse.prototype, "statusCode", void 0);
    return UpdateDatasetAsyncResponse;
}(SpeakeasyBase));
export { UpdateDatasetAsyncResponse };
