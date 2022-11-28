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
// UserDto
/**
 * The UserDTO Class.
 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
 *
**/
var UserDto = /** @class */ (function (_super) {
    __extends(UserDto, _super);
    function UserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "accountNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalEntityNumber" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "externalEntityNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guardian" }),
        __metadata("design:type", Number)
    ], UserDto.prototype, "guardian", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gymNumber" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "gymNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=introduceBy" }),
        __metadata("design:type", Number)
    ], UserDto.prototype, "introduceBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], UserDto.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeId" }),
        __metadata("design:type", Number)
    ], UserDto.prototype, "typeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", Number)
    ], UserDto.prototype, "userId", void 0);
    return UserDto;
}(SpeakeasyBase));
export { UserDto };
