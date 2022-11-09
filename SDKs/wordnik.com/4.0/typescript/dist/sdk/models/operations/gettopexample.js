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
var GetTopExamplePathParams = /** @class */ (function (_super) {
    __extends(GetTopExamplePathParams, _super);
    function GetTopExamplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetTopExamplePathParams.prototype, "word", void 0);
    return GetTopExamplePathParams;
}(SpeakeasyBase));
export { GetTopExamplePathParams };
export var GetTopExampleUseCanonicalEnum;
(function (GetTopExampleUseCanonicalEnum) {
    GetTopExampleUseCanonicalEnum["False"] = "false";
    GetTopExampleUseCanonicalEnum["True"] = "true";
})(GetTopExampleUseCanonicalEnum || (GetTopExampleUseCanonicalEnum = {}));
var GetTopExampleQueryParams = /** @class */ (function (_super) {
    __extends(GetTopExampleQueryParams, _super);
    function GetTopExampleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetTopExampleQueryParams.prototype, "useCanonical", void 0);
    return GetTopExampleQueryParams;
}(SpeakeasyBase));
export { GetTopExampleQueryParams };
var GetTopExampleRequest = /** @class */ (function (_super) {
    __extends(GetTopExampleRequest, _super);
    function GetTopExampleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTopExamplePathParams)
    ], GetTopExampleRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTopExampleQueryParams)
    ], GetTopExampleRequest.prototype, "queryParams", void 0);
    return GetTopExampleRequest;
}(SpeakeasyBase));
export { GetTopExampleRequest };
var GetTopExampleResponse = /** @class */ (function (_super) {
    __extends(GetTopExampleResponse, _super);
    function GetTopExampleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetTopExampleResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTopExampleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTopExampleResponse.prototype, "statusCode", void 0);
    return GetTopExampleResponse;
}(SpeakeasyBase));
export { GetTopExampleResponse };
