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
var GetEtymologiesPathParams = /** @class */ (function (_super) {
    __extends(GetEtymologiesPathParams, _super);
    function GetEtymologiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetEtymologiesPathParams.prototype, "word", void 0);
    return GetEtymologiesPathParams;
}(SpeakeasyBase));
export { GetEtymologiesPathParams };
export var GetEtymologiesUseCanonicalEnum;
(function (GetEtymologiesUseCanonicalEnum) {
    GetEtymologiesUseCanonicalEnum["False"] = "false";
    GetEtymologiesUseCanonicalEnum["True"] = "true";
})(GetEtymologiesUseCanonicalEnum || (GetEtymologiesUseCanonicalEnum = {}));
var GetEtymologiesQueryParams = /** @class */ (function (_super) {
    __extends(GetEtymologiesQueryParams, _super);
    function GetEtymologiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetEtymologiesQueryParams.prototype, "useCanonical", void 0);
    return GetEtymologiesQueryParams;
}(SpeakeasyBase));
export { GetEtymologiesQueryParams };
var GetEtymologiesRequest = /** @class */ (function (_super) {
    __extends(GetEtymologiesRequest, _super);
    function GetEtymologiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEtymologiesPathParams)
    ], GetEtymologiesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEtymologiesQueryParams)
    ], GetEtymologiesRequest.prototype, "queryParams", void 0);
    return GetEtymologiesRequest;
}(SpeakeasyBase));
export { GetEtymologiesRequest };
var GetEtymologiesResponse = /** @class */ (function (_super) {
    __extends(GetEtymologiesResponse, _super);
    function GetEtymologiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetEtymologiesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEtymologiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEtymologiesResponse.prototype, "statusCode", void 0);
    return GetEtymologiesResponse;
}(SpeakeasyBase));
export { GetEtymologiesResponse };
