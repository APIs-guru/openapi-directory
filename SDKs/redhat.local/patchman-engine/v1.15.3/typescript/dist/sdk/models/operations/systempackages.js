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
var SystemPackagesPathParams = /** @class */ (function (_super) {
    __extends(SystemPackagesPathParams, _super);
    function SystemPackagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=inventory_id" }),
        __metadata("design:type", String)
    ], SystemPackagesPathParams.prototype, "inventoryId", void 0);
    return SystemPackagesPathParams;
}(SpeakeasyBase));
export { SystemPackagesPathParams };
var SystemPackagesQueryParams = /** @class */ (function (_super) {
    __extends(SystemPackagesQueryParams, _super);
    function SystemPackagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[description]" }),
        __metadata("design:type", String)
    ], SystemPackagesQueryParams.prototype, "filterDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[evra]" }),
        __metadata("design:type", String)
    ], SystemPackagesQueryParams.prototype, "filterEvra", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[name]" }),
        __metadata("design:type", String)
    ], SystemPackagesQueryParams.prototype, "filterName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[summary]" }),
        __metadata("design:type", String)
    ], SystemPackagesQueryParams.prototype, "filterSummary", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter[updatable]" }),
        __metadata("design:type", Boolean)
    ], SystemPackagesQueryParams.prototype, "filterUpdatable", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SystemPackagesQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], SystemPackagesQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], SystemPackagesQueryParams.prototype, "search", void 0);
    return SystemPackagesQueryParams;
}(SpeakeasyBase));
export { SystemPackagesQueryParams };
var SystemPackagesSecurity = /** @class */ (function (_super) {
    __extends(SystemPackagesSecurity, _super);
    function SystemPackagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], SystemPackagesSecurity.prototype, "rhIdentity", void 0);
    return SystemPackagesSecurity;
}(SpeakeasyBase));
export { SystemPackagesSecurity };
var SystemPackagesRequest = /** @class */ (function (_super) {
    __extends(SystemPackagesRequest, _super);
    function SystemPackagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SystemPackagesPathParams)
    ], SystemPackagesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SystemPackagesQueryParams)
    ], SystemPackagesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SystemPackagesSecurity)
    ], SystemPackagesRequest.prototype, "security", void 0);
    return SystemPackagesRequest;
}(SpeakeasyBase));
export { SystemPackagesRequest };
var SystemPackagesResponse = /** @class */ (function (_super) {
    __extends(SystemPackagesResponse, _super);
    function SystemPackagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SystemPackagesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SystemPackagesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ControllersSystemPackageResponse)
    ], SystemPackagesResponse.prototype, "controllersSystemPackageResponse", void 0);
    return SystemPackagesResponse;
}(SpeakeasyBase));
export { SystemPackagesResponse };
