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
var GetDatasetPathParams = /** @class */ (function (_super) {
    __extends(GetDatasetPathParams, _super);
    function GetDatasetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], GetDatasetPathParams.prototype, "datasetId", void 0);
    return GetDatasetPathParams;
}(SpeakeasyBase));
export { GetDatasetPathParams };
var GetDatasetSecurity = /** @class */ (function (_super) {
    __extends(GetDatasetSecurity, _super);
    function GetDatasetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetDatasetSecurity.prototype, "bearerToken", void 0);
    return GetDatasetSecurity;
}(SpeakeasyBase));
export { GetDatasetSecurity };
var GetDatasetRequest = /** @class */ (function (_super) {
    __extends(GetDatasetRequest, _super);
    function GetDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDatasetPathParams)
    ], GetDatasetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDatasetSecurity)
    ], GetDatasetRequest.prototype, "security", void 0);
    return GetDatasetRequest;
}(SpeakeasyBase));
export { GetDatasetRequest };
var GetDatasetResponse = /** @class */ (function (_super) {
    __extends(GetDatasetResponse, _super);
    function GetDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], GetDatasetResponse.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDatasetResponse.prototype, "statusCode", void 0);
    return GetDatasetResponse;
}(SpeakeasyBase));
export { GetDatasetResponse };
