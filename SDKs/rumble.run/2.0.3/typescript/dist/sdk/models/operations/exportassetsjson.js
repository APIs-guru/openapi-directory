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
var ExportAssetsJsonQueryParams = /** @class */ (function (_super) {
    __extends(ExportAssetsJsonQueryParams, _super);
    function ExportAssetsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ExportAssetsJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportAssetsJsonQueryParams.prototype, "search", void 0);
    return ExportAssetsJsonQueryParams;
}(SpeakeasyBase));
export { ExportAssetsJsonQueryParams };
var ExportAssetsJsonSecurity = /** @class */ (function (_super) {
    __extends(ExportAssetsJsonSecurity, _super);
    function ExportAssetsJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportAssetsJsonSecurity.prototype, "bearerAuth", void 0);
    return ExportAssetsJsonSecurity;
}(SpeakeasyBase));
export { ExportAssetsJsonSecurity };
var ExportAssetsJsonRequest = /** @class */ (function (_super) {
    __extends(ExportAssetsJsonRequest, _super);
    function ExportAssetsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExportAssetsJsonQueryParams)
    ], ExportAssetsJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportAssetsJsonSecurity)
    ], ExportAssetsJsonRequest.prototype, "security", void 0);
    return ExportAssetsJsonRequest;
}(SpeakeasyBase));
export { ExportAssetsJsonRequest };
var ExportAssetsJsonResponse = /** @class */ (function (_super) {
    __extends(ExportAssetsJsonResponse, _super);
    function ExportAssetsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.Asset }),
        __metadata("design:type", Array)
    ], ExportAssetsJsonResponse.prototype, "assets", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExportAssetsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExportAssetsJsonResponse.prototype, "statusCode", void 0);
    return ExportAssetsJsonResponse;
}(SpeakeasyBase));
export { ExportAssetsJsonResponse };
