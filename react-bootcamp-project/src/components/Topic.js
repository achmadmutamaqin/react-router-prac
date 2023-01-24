import React from "react";
import { useParams } from "react-router-dom";

export default function Topic({ match }) {
    const { topicId } = useParams()
    return <h2>{topicId}</h2>
}