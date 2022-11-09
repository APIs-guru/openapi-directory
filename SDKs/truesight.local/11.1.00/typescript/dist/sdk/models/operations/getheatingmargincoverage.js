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
export var GetHeatingMarginCoverageDirectionEnum;
(function (GetHeatingMarginCoverageDirectionEnum) {
    GetHeatingMarginCoverageDirectionEnum["Asc"] = "asc";
    GetHeatingMarginCoverageDirectionEnum["Desc"] = "desc";
})(GetHeatingMarginCoverageDirectionEnum || (GetHeatingMarginCoverageDirectionEnum = {}));
var GetHeatingMarginCoverageQueryParams = /** @class */ (function (_super) {
    __extends(GetHeatingMarginCoverageQueryParams, _super);
    function GetHeatingMarginCoverageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=applicationId" }),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageQueryParams.prototype, "applicationId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=covered" }),
        __metadata("design:type", Boolean)
    ], GetHeatingMarginCoverageQueryParams.prototype, "covered", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageQueryParams.prototype, "direction", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageQueryParams.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetHeatingMarginCoverageQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageQueryParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageQueryParams.prototype, "sort", void 0);
    return GetHeatingMarginCoverageQueryParams;
}(SpeakeasyBase));
export { GetHeatingMarginCoverageQueryParams };
var GetHeatingMarginCoverageRequest = /** @class */ (function (_super) {
    __extends(GetHeatingMarginCoverageRequest, _super);
    function GetHeatingMarginCoverageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetHeatingMarginCoverageQueryParams)
    ], GetHeatingMarginCoverageRequest.prototype, "queryParams", void 0);
    return GetHeatingMarginCoverageRequest;
}(SpeakeasyBase));
export { GetHeatingMarginCoverageRequest };
var GetHeatingMarginCoverageResponse = /** @class */ (function (_super) {
    __extends(GetHeatingMarginCoverageResponse, _super);
    function GetHeatingMarginCoverageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetHeatingMarginCoverageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetHeatingMarginCoverageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetHeatingMarginCoverageResponse.prototype, "statusCode", void 0);
    return GetHeatingMarginCoverageResponse;
}(SpeakeasyBase));
export { GetHeatingMarginCoverageResponse };
