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
var AddExamplePathParams = /** @class */ (function (_super) {
    __extends(AddExamplePathParams, _super);
    function AddExamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], AddExamplePathParams.prototype, "datasetId", void 0);
    return AddExamplePathParams;
}(SpeakeasyBase));
export { AddExamplePathParams };
var AddExampleRequestBody = /** @class */ (function (_super) {
    __extends(AddExampleRequestBody, _super);
    function AddExampleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=data" }),
        __metadata("design:type", String)
    ], AddExampleRequestBody.prototype, "data", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=labelId" }),
        __metadata("design:type", Number)
    ], AddExampleRequestBody.prototype, "labelId", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], AddExampleRequestBody.prototype, "name", void 0);
    return AddExampleRequestBody;
}(SpeakeasyBase));
export { AddExampleRequestBody };
var AddExampleSecurity = /** @class */ (function (_super) {
    __extends(AddExampleSecurity, _super);
    function AddExampleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], AddExampleSecurity.prototype, "bearerToken", void 0);
    return AddExampleSecurity;
}(SpeakeasyBase));
export { AddExampleSecurity };
var AddExampleRequest = /** @class */ (function (_super) {
    __extends(AddExampleRequest, _super);
    function AddExampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AddExamplePathParams)
    ], AddExampleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddExampleRequestBody)
    ], AddExampleRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AddExampleSecurity)
    ], AddExampleRequest.prototype, "security", void 0);
    return AddExampleRequest;
}(SpeakeasyBase));
export { AddExampleRequest };
var AddExampleResponse = /** @class */ (function (_super) {
    __extends(AddExampleResponse, _super);
    function AddExampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AddExampleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Example)
    ], AddExampleResponse.prototype, "example", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AddExampleResponse.prototype, "statusCode", void 0);
    return AddExampleResponse;
}(SpeakeasyBase));
export { AddExampleResponse };
