import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const PswToggle = () => {
  const [visible, setVisibility] = useState(false);
  const Icon = (
    <FontAwesomeIcon
      onClick={() => setVisibility((visibility) => !visibility)}
      icon={visible ? faEyeSlash : faEye}
    />
  );
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default PswToggle;
