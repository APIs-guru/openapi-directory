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
var GetDataset1PathParams = /** @class */ (function (_super) {
    __extends(GetDataset1PathParams, _super);
    function GetDataset1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], GetDataset1PathParams.prototype, "datasetId", void 0);
    return GetDataset1PathParams;
}(SpeakeasyBase));
export { GetDataset1PathParams };
var GetDataset1Security = /** @class */ (function (_super) {
    __extends(GetDataset1Security, _super);
    function GetDataset1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetDataset1Security.prototype, "bearerToken", void 0);
    return GetDataset1Security;
}(SpeakeasyBase));
export { GetDataset1Security };
var GetDataset1Request = /** @class */ (function (_super) {
    __extends(GetDataset1Request, _super);
    function GetDataset1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDataset1PathParams)
    ], GetDataset1Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDataset1Security)
    ], GetDataset1Request.prototype, "security", void 0);
    return GetDataset1Request;
}(SpeakeasyBase));
export { GetDataset1Request };
var GetDataset1Response = /** @class */ (function (_super) {
    __extends(GetDataset1Response, _super);
    function GetDataset1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDataset1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Dataset)
    ], GetDataset1Response.prototype, "dataset", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDataset1Response.prototype, "statusCode", void 0);
    return GetDataset1Response;
}(SpeakeasyBase));
export { GetDataset1Response };
