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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var MembershipGetSecurity = /** @class */ (function (_super) {
    __extends(MembershipGetSecurity, _super);
    function MembershipGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeBearer)
    ], MembershipGetSecurity.prototype, "bearer", void 0);
    return MembershipGetSecurity;
}(SpeakeasyBase));
export { MembershipGetSecurity };
var MembershipGetRequest = /** @class */ (function (_super) {
    __extends(MembershipGetRequest, _super);
    function MembershipGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MembershipGetSecurity)
    ], MembershipGetRequest.prototype, "security", void 0);
    return MembershipGetRequest;
}(SpeakeasyBase));
export { MembershipGetRequest };
var MembershipGetResponse = /** @class */ (function (_super) {
    __extends(MembershipGetResponse, _super);
    function MembershipGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MembershipGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MemberDto }),
        __metadata("design:type", Array)
    ], MembershipGetResponse.prototype, "memberDtos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProblemDetails)
    ], MembershipGetResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MembershipGetResponse.prototype, "statusCode", void 0);
    return MembershipGetResponse;
}(SpeakeasyBase));
export { MembershipGetResponse };
