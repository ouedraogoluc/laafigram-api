import React from 'react'

export default function NewsArticle({ article }) {
    return (
        <tr>
            <td> {  article.title } </td>
            <td>  {  article.source }  </td>
            <td> {  article.content }  </td>
            <td> {  article.date }  </td>
        </tr>
    )
}
