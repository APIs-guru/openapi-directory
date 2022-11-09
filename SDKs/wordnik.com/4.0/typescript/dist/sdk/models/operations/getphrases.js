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
var GetPhrasesPathParams = /** @class */ (function (_super) {
    __extends(GetPhrasesPathParams, _super);
    function GetPhrasesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetPhrasesPathParams.prototype, "word", void 0);
    return GetPhrasesPathParams;
}(SpeakeasyBase));
export { GetPhrasesPathParams };
export var GetPhrasesUseCanonicalEnum;
(function (GetPhrasesUseCanonicalEnum) {
    GetPhrasesUseCanonicalEnum["False"] = "false";
    GetPhrasesUseCanonicalEnum["True"] = "true";
})(GetPhrasesUseCanonicalEnum || (GetPhrasesUseCanonicalEnum = {}));
var GetPhrasesQueryParams = /** @class */ (function (_super) {
    __extends(GetPhrasesQueryParams, _super);
    function GetPhrasesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetPhrasesQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetPhrasesQueryParams.prototype, "useCanonical", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=wlmi" }),
        __metadata("design:type", Number)
    ], GetPhrasesQueryParams.prototype, "wlmi", void 0);
    return GetPhrasesQueryParams;
}(SpeakeasyBase));
export { GetPhrasesQueryParams };
var GetPhrasesRequest = /** @class */ (function (_super) {
    __extends(GetPhrasesRequest, _super);
    function GetPhrasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPhrasesPathParams)
    ], GetPhrasesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPhrasesQueryParams)
    ], GetPhrasesRequest.prototype, "queryParams", void 0);
    return GetPhrasesRequest;
}(SpeakeasyBase));
export { GetPhrasesRequest };
var GetPhrasesResponse = /** @class */ (function (_super) {
    __extends(GetPhrasesResponse, _super);
    function GetPhrasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetPhrasesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPhrasesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPhrasesResponse.prototype, "statusCode", void 0);
    return GetPhrasesResponse;
}(SpeakeasyBase));
export { GetPhrasesResponse };
